import React, { createContext, useContext, useReducer, useEffect } from 'react';

const ProgressContext = createContext();

const initialState = {
  completedDays: {}, // { "ambas-1": true, "hipertenso-2": false }
  completedExercises: {}, // { "ambas-1-0": true, "ambas-1-1": false }
  streakDays: 0,
  totalDaysCompleted: 0,
  lastActivity: null
};

const progressReducer = (state, action) => {
  switch (action.type) {
    case 'COMPLETE_EXERCISE':
      const exerciseKey = `${action.payload.category}-${action.payload.day}-${action.payload.exerciseIndex}`;
      return {
        ...state,
        completedExercises: {
          ...state.completedExercises,
          [exerciseKey]: true
        },
        lastActivity: new Date().toISOString()
      };

    case 'COMPLETE_DAY':
      const dayKey = `${action.payload.category}-${action.payload.day}`;
      const newCompletedDays = {
        ...state.completedDays,
        [dayKey]: true
      };
      
      return {
        ...state,
        completedDays: newCompletedDays,
        totalDaysCompleted: Object.values(newCompletedDays).filter(Boolean).length,
        streakDays: state.streakDays + 1,
        lastActivity: new Date().toISOString()
      };

    case 'LOAD_PROGRESS':
      return {
        ...state,
        ...action.payload
      };

    case 'RESET_PROGRESS':
      return initialState;

    default:
      return state;
  }
};

export const ProgressProvider = ({ children }) => {
  const [state, dispatch] = useReducer(progressReducer, initialState);

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('exerciseProgress');
    if (savedProgress) {
      try {
        const parsedProgress = JSON.parse(savedProgress);
        dispatch({ type: 'LOAD_PROGRESS', payload: parsedProgress });
      } catch (error) {
        console.error('Error loading progress:', error);
      }
    }
  }, []);

  // Save progress to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('exerciseProgress', JSON.stringify(state));
  }, [state]);

  const completeExercise = (category, day, exerciseIndex) => {
    dispatch({
      type: 'COMPLETE_EXERCISE',
      payload: { category, day, exerciseIndex }
    });
  };

  const completeDay = (category, day) => {
    dispatch({
      type: 'COMPLETE_DAY', 
      payload: { category, day }
    });
  };

  const isExerciseCompleted = (category, day, exerciseIndex) => {
    const exerciseKey = `${category}-${day}-${exerciseIndex}`;
    return !!state.completedExercises[exerciseKey];
  };

  const isDayCompleted = (category, day) => {
    const dayKey = `${category}-${day}`;
    return !!state.completedDays[dayKey];
  };

  const getDayProgress = (category, day, totalExercises) => {
    let completed = 0;
    for (let i = 0; i < totalExercises; i++) {
      if (isExerciseCompleted(category, day, i)) {
        completed++;
      }
    }
    return { completed, total: totalExercises, percentage: (completed / totalExercises) * 100 };
  };

  const resetProgress = () => {
    dispatch({ type: 'RESET_PROGRESS' });
  };

  const value = {
    ...state,
    completeExercise,
    completeDay,
    isExerciseCompleted,
    isDayCompleted,
    getDayProgress,
    resetProgress
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}; 