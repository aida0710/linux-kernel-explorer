---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/arch/arm/plat-orion/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the linux kernel.
#
ccflags-y := -I$(src)/include

orion-gpio-$(CONFIG_GPIOLIB)      += gpio.o
obj-$(CONFIG_PLAT_ORION_LEGACY)   += irq.o pcie.o time.o common.o mpp.o
obj-$(CONFIG_PLAT_ORION_LEGACY)   += $(orion-gpio-y)

```
