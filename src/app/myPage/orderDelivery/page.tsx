import MobileOrderDelivery from './mobileOrderDelivery';
import WebOrderDelivery from './webOrderDelivery';

export default function OrderDeliveryPage() {
  return (
    <>
      <MobileOrderDelivery />
      <WebOrderDelivery />
    </>
  );
}
