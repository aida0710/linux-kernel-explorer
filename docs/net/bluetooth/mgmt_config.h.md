---
sidebar_position: 30
---
# mgmt_config.h

### ファイル情報

- パス: `net/bluetooth/mgmt_config.h`

### コンテンツ

```h
// SPDX-License-Identifier: GPL-2.0-only

/*
 * Copyright (C) 2020 Google Corporation
 */

int read_def_system_config(struct sock *sk, struct hci_dev *hdev, void *data,
			   u16 data_len);

int set_def_system_config(struct sock *sk, struct hci_dev *hdev, void *data,
			  u16 data_len);

int read_def_runtime_config(struct sock *sk, struct hci_dev *hdev, void *data,
			    u16 data_len);

int set_def_runtime_config(struct sock *sk, struct hci_dev *hdev, void *data,
			   u16 data_len);

```
