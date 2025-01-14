---
sidebar_position: 52
---
# ice_idc_int.h

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/intel/ice/ice_idc_int.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/* Copyright (c) 2021, Intel Corporation. */

#ifndef _ICE_IDC_INT_H_
#define _ICE_IDC_INT_H_

#include <linux/net/intel/iidc.h>

struct ice_pf;

void ice_send_event_to_aux(struct ice_pf *pf, struct iidc_event *event);

#endif /* !_ICE_IDC_INT_H_ */

```
