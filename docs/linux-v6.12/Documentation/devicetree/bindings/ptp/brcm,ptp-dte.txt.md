---
sidebar_position: 1
---
# brcm,ptp-dte.txt

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/ptp/brcm,ptp-dte.txt`

### コンテンツ

```txt
* Broadcom Digital Timing Engine(DTE) based PTP clock

Required properties:
- compatible: should contain the core compatibility string
              and the SoC compatibility string. The SoC
              compatibility string is to handle SoC specific
              hardware differences.
              Core compatibility string:
                 "brcm,ptp-dte"
              SoC compatibility strings:
                 "brcm,iproc-ptp-dte" - for iproc based SoC's
- reg: address and length of the DTE block's NCO registers

Example:

ptp: ptp-dte@180af650 {
	compatible = "brcm,iproc-ptp-dte", "brcm,ptp-dte";
	reg = <0x180af650 0x10>;
};

```
