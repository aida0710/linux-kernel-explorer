---
sidebar_position: 4
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/infiniband/ulp/srp/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config INFINIBAND_SRP
	tristate "InfiniBand SCSI RDMA Protocol"
	depends on SCSI && INFINIBAND_ADDR_TRANS
	select SCSI_SRP_ATTRS
	help
	  Support for the SCSI RDMA Protocol over InfiniBand.  This
	  allows you to access storage devices that speak SRP over
	  InfiniBand.

	  The SRP protocol is defined by the INCITS T10 technical
	  committee.  See <http://www.t10.org/>.


```
