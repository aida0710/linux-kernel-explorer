---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/wangxun/libwx/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
# Copyright (c) 2015 - 2022 Beijing WangXun Technology Co., Ltd.
#

obj-$(CONFIG_LIBWX) += libwx.o

libwx-objs := wx_hw.o wx_lib.o wx_ethtool.o

```
