---
sidebar_position: 6
---
# hid-core.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/hid/hid-core.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
# Runs tests for the HID subsystem

export TARGET=test_hid_core.py

bash ./run-hid-tools-tests.sh

```
