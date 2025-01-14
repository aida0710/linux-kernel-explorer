---
sidebar_position: 13
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/media/i2c/ccs/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config VIDEO_CCS
	tristate "MIPI CCS/SMIA++/SMIA sensor support"
	depends on HAVE_CLK
	select V4L2_CCI_I2C
	select VIDEO_CCS_PLL
	help
	  This is a generic driver for MIPI CCS, SMIA++ and SMIA compliant
	  camera sensors.

```
