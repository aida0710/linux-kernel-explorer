---
sidebar_position: 16
---
# read

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/kerneldoc/read`

### コンテンツ

```txt
cat <<EOF
/**
 * ${class}${atomicname}() - atomic load with ${desc_order} ordering
 * @v: pointer to ${atomic}_t
 *
 * Atomically loads the value of @v with ${desc_order} ordering.
 *
 * ${desc_noinstr}
 *
 * Return: The value loaded from @v.
 */
EOF

```
