---
sidebar_position: 10
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/media/radio/wl128x/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# TI's wl128x FM driver based on TI's ST driver.
#
config RADIO_WL128X
	tristate "Texas Instruments WL128x FM Radio"
	depends on VIDEO_DEV && RFKILL && TTY && TI_ST
	depends on GPIOLIB || COMPILE_TEST
	help
	  Choose Y here if you have this FM radio chip.

	  In order to control your radio card, you will need to use programs
	  that are compatible with the Video For Linux 2 API.  Information on
	  this API and pointers to "v4l2" programs may be found at
	  <file:Documentation/userspace-api/media/index.rst>.

```
