---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/soc/imx/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
ifeq ($(CONFIG_ARM),y)
obj-$(CONFIG_ARCH_MXC) += soc-imx.o
endif
obj-$(CONFIG_SOC_IMX8M) += soc-imx8m.o
obj-$(CONFIG_SOC_IMX9) += imx93-src.o

```
