"use client";

import "styles/layout/_general.scss";
import "styles/base/_typography.scss";
import "styles/pages/_pricing.scss";

import PriceCard, { PriceCardProps } from "@/components/PriceCard";
import { useState } from "react";
import QrDownloadDialog, {
  QrDownloadDialogProps,
} from "@/dialogs/QrDownloadDialog";

const benefits = {
  policy: "Return any item, from any store",
  schedule: "Pickups available Mon - Fri",
  pickups: "Weekend pickups",
  hours: "Pickups available Mon - Fri",
};

const PricingData: PriceCardProps[] = [
  {
    price: 9,
    per: "pickup",
    included: [benefits.policy, benefits.schedule],
    excluded: [benefits.pickups, benefits.hours],
    freetrial: false,
  },
  {
    price: 19,
    per: "month",
    included: [benefits.policy, benefits.schedule, benefits.pickups],
    excluded: benefits.hours,
    freetrial: true,
  },
  {
    price: 99,
    per: "year",
    included: [
      benefits.policy,
      benefits.schedule,
      benefits.pickups,
      benefits.hours,
    ],
    excluded: [],
    freetrial: true,
  },
];

type DialogId = "QrDownloadDialog";

export default function Pricing() {
  const [dialogId, setDialogId] = useState<DialogId>();
  const [qrDownloadDialogProps, setQrDownloagDialogProps] =
    useState<QrDownloadDialogProps>();

  const closeDialog = () => {
    setDialogId(undefined);
    setQrDownloagDialogProps(undefined);
  };

  const openDownloadDialog = () => {
    setDialogId("QrDownloadDialog");
    setQrDownloagDialogProps({
      open: true,
      close: closeDialog,
    });
  };

  const handleClickDownload = () => {
    openDownloadDialog();
  };
  return (
    <>
      <article className="pricing general">
        <h1 className="title">Pricing</h1>
        <h2 className="subtitle">Cancel or change your plan anytime</h2>

        <div className="pricing__cards">
          <section className="pricing__cards__nofreetrial">
            <div className="pricing__cards__title gradienttextpurple">
              Pay-Per-Pickup
            </div>
            {PricingData.map(
              ({ price, per, included, excluded, freetrial }, idx) =>
                freetrial != true && (
                  <PriceCard
                    key={idx}
                    price={price}
                    per={per}
                    included={included}
                    excluded={excluded}
                    freetrial={freetrial}
                  />
                )
            )}
          </section>

          <section className="pricing__cards__freetrial">
            <div className="tag">Free 7-day trial</div>
            <div className="pricing__cards__title gradienttextpurple">
              Unlimited Pickups
            </div>
            <div className="pricing__cards__container">
              {PricingData.map(
                ({ price, per, included, excluded, freetrial }, idx) =>
                  freetrial && (
                    <PriceCard
                      key={idx}
                      price={price}
                      per={per}
                      included={included}
                      excluded={excluded}
                      freetrial={freetrial}
                    />
                  )
              )}
            </div>
          </section>
        </div>

        <button className="downloadbuttonmain" onClick={handleClickDownload}>
          Download App
        </button>
      </article>
      {dialogId === "QrDownloadDialog" && qrDownloadDialogProps && (
        <QrDownloadDialog {...qrDownloadDialogProps} />
      )}
    </>
  );
}
