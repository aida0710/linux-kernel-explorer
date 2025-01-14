---
sidebar_position: 60
---
# rtc-mt6397.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/rtc/rtc-mt6397.txt`

### コンテンツ

```txt
Device-Tree bindings for MediaTek PMIC based RTC

MediaTek PMIC based RTC is an independent function of MediaTek PMIC that works
as a type of multi-function device (MFD). The RTC can be configured and set up
with PMIC wrapper bus which is a common resource shared with the other
functions found on the same PMIC.

For MediaTek PMIC MFD bindings, see:
../mfd/mt6397.txt

For MediaTek PMIC wrapper bus bindings, see:
../soc/mediatek/pwrap.txt

Required properties:
- compatible: Should be one of follows
       "mediatek,mt6323-rtc": for MT6323 PMIC
       "mediatek,mt6358-rtc": for MT6358 PMIC
       "mediatek,mt6366-rtc", "mediatek,mt6358-rtc": for MT6366 PMIC
       "mediatek,mt6397-rtc": for MT6397 PMIC

Example:

       pmic {
               compatible = "mediatek,mt6323";

               ...

               rtc {
                       compatible = "mediatek,mt6323-rtc";
               };
       };

```
