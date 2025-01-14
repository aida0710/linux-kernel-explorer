---
sidebar_position: 6
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/soc/fsl/dpio/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# QorIQ DPAA2 DPIO driver
#

obj-$(CONFIG_FSL_MC_DPIO) += fsl-mc-dpio.o

fsl-mc-dpio-objs := dpio.o qbman-portal.o dpio-service.o dpio-driver.o

```
