---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/qualcomm/rmnet/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the RMNET module
#

rmnet-y		 := rmnet_config.o
rmnet-y		 += rmnet_vnd.o
rmnet-y		 += rmnet_handlers.o
rmnet-y		 += rmnet_map_data.o
rmnet-y		 += rmnet_map_command.o
obj-$(CONFIG_RMNET) += rmnet.o

```
