---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/smsc/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the SMSC network device drivers.
#

obj-$(CONFIG_SMC9194) += smc9194.o
obj-$(CONFIG_SMC91X) += smc91x.o
obj-$(CONFIG_PCMCIA_SMC91C92) += smc91c92_cs.o
obj-$(CONFIG_EPIC100) += epic100.o
obj-$(CONFIG_SMSC9420) += smsc9420.o
obj-$(CONFIG_SMSC911X) += smsc911x.o

```
