---
sidebar_position: 21
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/ath/ath5k/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: ISC
ath5k-y				+= caps.o
ath5k-y				+= initvals.o
ath5k-y				+= eeprom.o
ath5k-y				+= gpio.o
ath5k-y				+= desc.o
ath5k-y				+= dma.o
ath5k-y				+= qcu.o
ath5k-y				+= pcu.o
ath5k-y				+= phy.o
ath5k-y				+= reset.o
ath5k-y				+= attach.o
ath5k-y				+= base.o
CFLAGS_base.o			+= -I$(src)
ath5k-y				+= led.o
ath5k-y				+= rfkill.o
ath5k-y				+= ani.o
ath5k-y				+= sysfs.o
ath5k-y				+= mac80211-ops.o
ath5k-$(CONFIG_ATH5K_DEBUG)	+= debug.o
ath5k-$(CONFIG_ATH5K_AHB)	+= ahb.o
ath5k-$(CONFIG_ATH5K_PCI)	+= pci.o
obj-$(CONFIG_ATH5K)		+= ath5k.o

```
