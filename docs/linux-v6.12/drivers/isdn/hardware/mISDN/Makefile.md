---
sidebar_position: 15
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/isdn/hardware/mISDN/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the modular ISDN hardware drivers
#
#

obj-$(CONFIG_MISDN_HFCPCI) += hfcpci.o
obj-$(CONFIG_MISDN_HFCMULTI) += hfcmulti.o
obj-$(CONFIG_MISDN_HFCUSB) += hfcsusb.o
obj-$(CONFIG_MISDN_AVMFRITZ) += avmfritz.o
obj-$(CONFIG_MISDN_SPEEDFAX) += speedfax.o
obj-$(CONFIG_MISDN_INFINEON) += mISDNinfineon.o
obj-$(CONFIG_MISDN_W6692) += w6692.o
obj-$(CONFIG_MISDN_NETJET) += netjet.o
# chip modules
obj-$(CONFIG_MISDN_IPAC) += mISDNipac.o
obj-$(CONFIG_MISDN_ISAR) += mISDNisar.o

obj-$(CONFIG_MISDN_HDLC) += isdnhdlc.o

```
