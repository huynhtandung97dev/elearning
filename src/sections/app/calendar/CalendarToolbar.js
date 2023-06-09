// ----------------------------------------------------------------------
// Calendar Toolbar
// ----------------------------------------------------------------------
// proptype
import PropTypes from 'prop-types';
// @mui
import { Button, IconButton, Stack, ToggleButton, Tooltip, Typography } from '@mui/material';
// utils
import { fDateTimeCalendar } from '../../../utils/formatTime';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const VIEW_OPTIONS = [
  { value: 'dayGridMonth', label: 'Tháng', icon: 'ic:round-view-module' },
  { value: 'timeGridWeek', label: 'Tuần', icon: 'ic:round-view-week' },
  { value: 'timeGridDay', label: 'Ngày', icon: 'ic:round-view-day' },
  { value: 'listWeek', label: 'Tổng hợp', icon: 'ic:round-view-agenda' },
]; // option xem lịch

// ----------------------------------------------------------------------

CalendarToolbar.propTypes = {
  onToday: PropTypes.func,
  onNextDate: PropTypes.func,
  onPrevDate: PropTypes.func,
  onOpenFilter: PropTypes.func,
  onChangeView: PropTypes.func,
  date: PropTypes.instanceOf(Date),
  view: PropTypes.oneOf(['dayGridMonth', 'timeGridWeek', 'timeGridDay', 'listWeek']),
}; // proptype

export default function CalendarToolbar({
  date,
  view,
  onToday,
  onNextDate,
  onPrevDate,
  onChangeView,
  onOpenFilter,
}) {
  const isDesktop = useResponsive('up', 'sm'); // check giao diện desktop

  return (
    <Stack
      alignItems="center"
      justifyContent="space-between"
      direction={{ xs: 'column', sm: 'row' }}
      sx={{ p: 2.5 }}
    >
      {isDesktop && (
        <Stack direction="row" spacing={1}>
          {VIEW_OPTIONS.map((viewOption) => (
            <Tooltip key={viewOption.value} title={viewOption.label}>
              <ToggleButton
                size="small"
                value={view}
                selected={viewOption.value === view}
                onChange={() => onChangeView(viewOption.value)}
              >
                <Iconify icon={viewOption.icon} />
              </ToggleButton>
            </Tooltip>
          ))}
        </Stack>
      )}

      <Stack direction="row" alignItems="center" spacing={2}>
        <IconButton onClick={onPrevDate}>
          <Iconify icon="eva:arrow-ios-back-fill" />
        </IconButton>

        <Typography variant="h5">{fDateTimeCalendar(date, 'dd/MM/yyyy')}</Typography>

        <IconButton onClick={onNextDate}>
          <Iconify icon="eva:arrow-ios-forward-fill" />
        </IconButton>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={1}>
        {isDesktop && (
          <Button size="small" color="error" variant="contained" onClick={onToday}>
            Hôm nay
          </Button>
        )}

        <IconButton onClick={onOpenFilter}>
          <Iconify icon="ic:round-filter-list" />
        </IconButton>
      </Stack>
    </Stack>
  );
}
