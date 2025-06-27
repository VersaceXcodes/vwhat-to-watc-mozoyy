import React, { useState, useEffect, useCallback } from '"'"'react'"'"';
import axios from '"'"'axios'"'"';
import { useQuery, useMutation, useQueryClient } from '"'"'@tanstack/react-query'"'"';

// Import from the global Zustand store for lookup data and session management
import { useAppStore, Genre, Mood, StreamingService, ContentDetails } from '"'"'@/store/main'"'"';
