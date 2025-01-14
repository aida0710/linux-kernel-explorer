---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/firmware/imx/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_IMX_DSP)		+= imx-dsp.o
obj-$(CONFIG_IMX_SCU)		+= imx-scu.o misc.o imx-scu-irq.o rm.o imx-scu-soc.o
obj-${CONFIG_IMX_SCMI_MISC_DRV}	+= sm-misc.o

```
