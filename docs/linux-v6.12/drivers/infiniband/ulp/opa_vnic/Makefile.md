---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/infiniband/ulp/opa_vnic/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
# Makefile - Cornelis Omni-Path Express Virtual Network Controller driver
# Copyright(c) 2017, Intel Corporation.
# Copyright(c) 2021, Cornelis Networks.
#
obj-$(CONFIG_INFINIBAND_OPA_VNIC) += opa_vnic.o

opa_vnic-y := opa_vnic_netdev.o opa_vnic_encap.o opa_vnic_ethtool.o \
              opa_vnic_vema.o opa_vnic_vema_iface.o

```
