import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default alert = (type) => {
  switch (type) {
    case 'info':
      return NotificationManager.info('Info message');
    case 'success':
      return NotificationManager.success('Successfully Updated', 'Movies Updated');
    case 'warning':
      return NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
    case 'error':
      return NotificationManager.error('Error message', 'Click me!', 5000, () => {
        alert('callback');
      });
    default:
      return NotificationManager.info('Info message');
  }
};