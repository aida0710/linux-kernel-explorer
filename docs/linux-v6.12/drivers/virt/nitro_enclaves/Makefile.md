---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/virt/nitro_enclaves/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.

# Enclave lifetime management support for Nitro Enclaves (NE).

obj-$(CONFIG_NITRO_ENCLAVES) += nitro_enclaves.o

nitro_enclaves-y := ne_pci_dev.o ne_misc_dev.o

```
