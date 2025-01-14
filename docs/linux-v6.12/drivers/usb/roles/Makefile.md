---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/usb/roles/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

obj-$(CONFIG_USB_ROLE_SWITCH)		+= roles.o
roles-y					:= class.o
obj-$(CONFIG_USB_ROLES_INTEL_XHCI)	+= intel-xhci-usb-role-switch.o

```
