---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/cec/platform/s5p/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_CEC_SAMSUNG_S5P)	+= s5p-cec.o
s5p-cec-y += s5p_cec.o exynos_hdmi_cecctrl.o

```
