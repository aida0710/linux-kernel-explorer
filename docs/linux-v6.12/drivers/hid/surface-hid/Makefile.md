---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/hid/surface-hid/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0+
#
# Makefile - Surface System Aggregator Module (SSAM) HID transport driver.
#
obj-$(CONFIG_SURFACE_HID_CORE)	+= surface_hid_core.o
obj-$(CONFIG_SURFACE_HID)	+= surface_hid.o
obj-$(CONFIG_SURFACE_KBD)	+= surface_kbd.o

```
