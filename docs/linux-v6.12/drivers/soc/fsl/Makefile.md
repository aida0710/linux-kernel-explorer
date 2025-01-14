---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/soc/fsl/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the Linux Kernel SOC fsl specific device drivers
#

obj-$(CONFIG_FSL_DPAA)                 += qbman/
obj-$(CONFIG_QUICC_ENGINE)		+= qe/
obj-$(CONFIG_CPM)			+= qe/
obj-$(CONFIG_FSL_RCPM)			+= rcpm.o
obj-$(CONFIG_FSL_GUTS)			+= guts.o
obj-$(CONFIG_FSL_MC_DPIO) 		+= dpio/
obj-$(CONFIG_DPAA2_CONSOLE)		+= dpaa2-console.o

```
