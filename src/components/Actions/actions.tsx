import { CHANGE_PROJECTS_GRID, OPEN_PROJECTS_DROPDOWN } from './_constants/constants';

export function openProjectsDropdown(payload: boolean) {
  return { payload, type: OPEN_PROJECTS_DROPDOWN };
}

export function changeProjectsGrid(payload: string) {
  return { payload, type: CHANGE_PROJECTS_GRID };
}
