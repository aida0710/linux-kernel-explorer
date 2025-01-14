---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/samples/connector/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_SAMPLE_CONNECTOR) += cn_test.o

userprogs-always-$(CONFIG_CC_CAN_LINK) += ucon

userccflags += -I usr/include

```
