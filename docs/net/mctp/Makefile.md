---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `net/mctp/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_MCTP) += mctp.o
mctp-objs := af_mctp.o device.o route.o neigh.o

# tests
obj-$(CONFIG_MCTP_TEST) += test/utils.o

```
