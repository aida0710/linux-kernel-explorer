---
sidebar_position: 8
---
# Makefile.am

### ファイル情報

- パス: `linux-v6.12/tools/usb/usbip/Makefile.am`

### コンテンツ

```am
# SPDX-License-Identifier: GPL-2.0
SUBDIRS := libsrc src
includedir = @includedir@/usbip
include_HEADERS := $(addprefix libsrc/, \
		     usbip_common.h vhci_driver.h usbip_host_driver.h \
		     list.h sysfs_utils.h usbip_host_common.h)

dist_man_MANS := $(addprefix doc/, usbip.8 usbipd.8)

```
