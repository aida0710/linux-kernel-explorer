---
sidebar_position: 29
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/brocade/bna/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Copyright (c) 2005-2014 Brocade Communications Systems, Inc.
# Copyright (c) 2014-2015 QLogic Corporation.
# All rights reserved.
#

obj-$(CONFIG_BNA) += bna.o

bna-objs := bnad.o bnad_ethtool.o bnad_debugfs.o bna_enet.o bna_tx_rx.o
bna-objs += bfa_msgq.o bfa_ioc.o bfa_ioc_ct.o bfa_cee.o
bna-objs += cna_fwimg.o

```
