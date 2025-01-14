---
sidebar_position: 314
---
# sc7280-herobrine-wifi-sku.dtsi

### ファイル情報

- パス: `linux-v6.12/arch/arm64/boot/dts/qcom/sc7280-herobrine-wifi-sku.dtsi`

### コンテンツ

```dtsi
// SPDX-License-Identifier: BSD-3-Clause
/*
 * Google Herobrine dts fragment for WIFI SKUs
 *
 * Copyright (c) 2022 Qualcomm Innovation Center, Inc. All rights reserved.
 */

/* WIFI SKUs save 256M by not having modem/mba/rmtfs memory regions defined. */

/delete-node/ &mpss_mem;
/delete-node/ &remoteproc_mpss;
/delete-node/ &rmtfs_mem;

```
