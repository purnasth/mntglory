/**
 * Event utility functions for handling URL slugs and event data
 */

import { EventData } from '../interfaces/types';

/**
 * Generate a URL-friendly slug from an event title
 */
export const generateEventSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
};

/**
 * Find an event by its slug from the events array
 */
export const findEventBySlug = (events: EventData[], slug: string): EventData | undefined => {
  if (!events || !slug) return undefined;
  
  return events.find(event => 
    generateEventSlug(event.title) === slug
  );
};

/**
 * Generate the full URL path for an event
 */
export const getEventPath = (event: EventData): string => {
  return `/events/${generateEventSlug(event.title)}`;
};

/**
 * Format date for display
 */
export const formatEventDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};