---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/pse-pd/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
# Makefile for Linux PSE drivers

obj-$(CONFIG_PSE_CONTROLLER) += pse_core.o

obj-$(CONFIG_PSE_REGULATOR) += pse_regulator.o
obj-$(CONFIG_PSE_PD692X0) += pd692x0.o
obj-$(CONFIG_PSE_TPS23881) += tps23881.o

```
