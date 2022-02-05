export const SIDE_BAR_ROUTES: Array<RoutesProps> = [
    {to: '#', label: 'Home'},
    {to: '#', label: 'Browse'},
    {to: '#', label: 'WatchList'},
    {to: '#', label: 'History'},
    {to: '#', label: 'Coming soon'},
    {to: '#', label: 'Settings'},
    {to: '#', label: 'logout'}
];

export interface RoutesProps {
    to: string,
    label: string
}