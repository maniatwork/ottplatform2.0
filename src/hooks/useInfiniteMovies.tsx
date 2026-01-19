import { useInfiniteQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { DbMovie, toFrontendMovie } from './useMovies';
import { movies as localMovies } from '@/data/movies';

const PAGE_SIZE = 12;

export function useInfiniteMovies(category: string = 'all') {
  return useInfiniteQuery({
    queryKey: ['infinite-movies', category],
    queryFn: async ({ pageParam = 0 }) => {
      try {
        let query = supabase
          .from('movies')
          .select('*', { count: 'exact' })
          .order('created_at', { ascending: false })
          .range(pageParam * PAGE_SIZE, (pageParam + 1) * PAGE_SIZE - 1);

        if (category !== 'all') {
          query = query.eq('category', category);
        }

        const { data, error, count } = await query;

        if (error || !data || data.length === 0) {
          // Fall back to local movies data
          const filteredLocal = category === 'all' 
            ? localMovies 
            : localMovies.filter(m => m.category === category);
          
          const paginatedMovies = filteredLocal.slice(
            pageParam * PAGE_SIZE,
            (pageParam + 1) * PAGE_SIZE
          );

          return {
            movies: paginatedMovies,
            nextPage: (pageParam + 1) * PAGE_SIZE < filteredLocal.length ? pageParam + 1 : undefined,
            totalCount: filteredLocal.length,
          };
        }
        
        return {
          movies: (data as DbMovie[]).map(toFrontendMovie),
          nextPage: (pageParam + 1) * PAGE_SIZE < (count || 0) ? pageParam + 1 : undefined,
          totalCount: count || 0,
        };
      } catch (error) {
        // Fall back to local movies data on any error
        const filteredLocal = category === 'all' 
          ? localMovies 
          : localMovies.filter(m => m.category === category);
        
        const paginatedMovies = filteredLocal.slice(
          pageParam * PAGE_SIZE,
          (pageParam + 1) * PAGE_SIZE
        );

        return {
          movies: paginatedMovies,
          nextPage: (pageParam + 1) * PAGE_SIZE < filteredLocal.length ? pageParam + 1 : undefined,
          totalCount: filteredLocal.length,
        };
      }
    },
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 0,
  });
}
