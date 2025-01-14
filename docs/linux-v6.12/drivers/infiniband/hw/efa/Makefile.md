---
sidebar_position: 14
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/infiniband/hw/efa/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0 OR BSD-2-Clause
# Copyright 2018-2019 Amazon.com, Inc. or its affiliates. All rights reserved.
#
# Makefile for Amazon Elastic Fabric Adapter (EFA) device driver.
#

obj-$(CONFIG_INFINIBAND_EFA) += efa.o

efa-y := efa_com_cmd.o efa_com.o efa_main.o efa_verbs.o

```
