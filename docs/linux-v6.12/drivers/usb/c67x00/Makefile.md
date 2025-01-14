---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/usb/c67x00/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for Cypress C67X00 USB Controller
#

obj-$(CONFIG_USB_C67X00_HCD)	+= c67x00.o

c67x00-y := c67x00-drv.o c67x00-ll-hpi.o c67x00-hcd.o c67x00-sched.o

```
