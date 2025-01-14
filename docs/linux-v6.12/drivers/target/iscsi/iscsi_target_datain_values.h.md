---
sidebar_position: 7
---
# iscsi_target_datain_values.h

### ファイル情報

- パス: `linux-v6.12/drivers/target/iscsi/iscsi_target_datain_values.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef ISCSI_TARGET_DATAIN_VALUES_H
#define ISCSI_TARGET_DATAIN_VALUES_H

struct iscsit_cmd;
struct iscsi_datain;

extern struct iscsi_datain_req *iscsit_allocate_datain_req(void);
extern void iscsit_attach_datain_req(struct iscsit_cmd *, struct iscsi_datain_req *);
extern void iscsit_free_datain_req(struct iscsit_cmd *, struct iscsi_datain_req *);
extern void iscsit_free_all_datain_reqs(struct iscsit_cmd *);
extern struct iscsi_datain_req *iscsit_get_datain_req(struct iscsit_cmd *);
extern struct iscsi_datain_req *iscsit_get_datain_values(struct iscsit_cmd *,
			struct iscsi_datain *);

#endif   /*** ISCSI_TARGET_DATAIN_VALUES_H ***/

```
