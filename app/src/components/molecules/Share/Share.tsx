import ShareIcon from "@rsuite/icons/ShareRound";
import { memo } from "react";
import { isMobile } from "react-device-detect";
import {
  EmailIcon,
  EmailShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share";
import { Button, Heading } from "rsuite";

interface ShareProps {
  shareTitle: string;
}

const Share = memo(({ shareTitle }: ShareProps) => {
  const shareUrl = window.location.href;

  return (
    <div className="share mb-4">
      <Heading level={3} className="share-title mb-4 font-extrabold sm:mb-2">
        ❤️ Do you like it? Share it with others.
      </Heading>

      <div className="share-items flex gap-2">
        {isMobile && (
          <Button className="p-0" appearance="link">
            <ShareIcon className="h-10 w-10" />
          </Button>
        )}

        <TelegramShareButton url={shareUrl} title={shareTitle}>
          <TelegramIcon size={40} round />
        </TelegramShareButton>

        <TwitterShareButton url={shareUrl} title={shareTitle}>
          <XIcon size={40} round />
        </TwitterShareButton>

        <EmailShareButton url={shareUrl} subject={shareTitle}>
          <EmailIcon size={40} round />
        </EmailShareButton>
      </div>
    </div>
  );
});

export default Share;
