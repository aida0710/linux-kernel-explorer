---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/staging/most/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

obj-$(CONFIG_MOST_NET)	+= net/
obj-$(CONFIG_MOST_VIDEO)	+= video/
obj-$(CONFIG_MOST_DIM2)	+= dim2/
obj-$(CONFIG_MOST_I2C)	+= i2c/

```
