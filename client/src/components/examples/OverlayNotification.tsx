import OverlayNotification from '../OverlayNotification';

export default function OverlayNotificationExample() {
  return (
    <div className="flex min-h-[400px] items-center justify-center bg-background p-6">
      <OverlayNotification
        level="manipulative"
        title="Manipulative Content Detected"
        description="This content uses emotional triggers and urgency tactics designed to bypass your rational thinking."
        onContinue={() => console.log('Continue clicked')}
        onSwitch={() => console.log('Switch clicked')}
        onClose={() => console.log('Close clicked')}
      />
    </div>
  );
}
