---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/infiniband/ulp/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_INFINIBAND_IPOIB)		+= ipoib/
obj-$(CONFIG_INFINIBAND_SRP)		+= srp/
obj-$(CONFIG_INFINIBAND_SRPT)		+= srpt/
obj-$(CONFIG_INFINIBAND_ISER)		+= iser/
obj-$(CONFIG_INFINIBAND_ISERT)		+= isert/
obj-$(CONFIG_INFINIBAND_OPA_VNIC)	+= opa_vnic/
obj-$(CONFIG_INFINIBAND_RTRS)		+= rtrs/

```
