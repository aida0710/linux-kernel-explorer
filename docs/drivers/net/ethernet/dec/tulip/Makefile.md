---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/dec/tulip/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the Linux "Tulip" family network device drivers.
#

ccflags-$(CONFIG_NET_TULIP)	:= -DDEBUG

obj-$(CONFIG_PCMCIA_XIRCOM)	+= xircom_cb.o
obj-$(CONFIG_DM9102)		+= dmfe.o
obj-$(CONFIG_WINBOND_840)	+= winbond-840.o
obj-$(CONFIG_DE2104X)		+= de2104x.o
obj-$(CONFIG_TULIP)		+= tulip.o
obj-$(CONFIG_ULI526X)		+= uli526x.o

# Declare multi-part drivers.

tulip-objs			:= eeprom.o interrupt.o media.o \
				   timer.o tulip_core.o		\
				   21142.o pnic.o pnic2.o

```
