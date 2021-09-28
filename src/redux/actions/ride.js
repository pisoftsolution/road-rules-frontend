import swal from 'sweetalert';
import { CONFIRM_RIDE_ONLINE } from '../constants';

export const confirmRideOnline = () => async (dispatch) => {
  try {
    const session = localStorage.getItem('session');
    const user = localStorage.getItem('user');
    const { data } = await api.confirmRideOnline(session, user);
    dispatch({ type: CONFIRM_RIDE_ONLINE, data });
    swal({
      text: 'Ride has booked',
      icon: 'success'
    });
  } catch (e) {
    swal({
      text: e.response?.data.msg,
      icon: 'error'
    });
  }
};

