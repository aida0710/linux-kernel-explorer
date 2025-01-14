---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/input/tablet/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the tablet drivers
#


obj-$(CONFIG_TABLET_USB_ACECAD)	+= acecad.o
obj-$(CONFIG_TABLET_USB_AIPTEK)	+= aiptek.o
obj-$(CONFIG_TABLET_USB_HANWANG) += hanwang.o
obj-$(CONFIG_TABLET_USB_KBTAB)	+= kbtab.o
obj-$(CONFIG_TABLET_USB_PEGASUS) += pegasus_notetaker.o
obj-$(CONFIG_TABLET_SERIAL_WACOM4) += wacom_serial4.o

```
