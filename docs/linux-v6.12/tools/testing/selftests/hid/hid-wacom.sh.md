---
sidebar_position: 15
---
# hid-wacom.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/hid/hid-wacom.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
# Runs tests for the HID subsystem

export TARGET=test_wacom_generic.py

bash ./run-hid-tools-tests.sh

```
