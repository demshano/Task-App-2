// @/graph/common/db.go
package common

import (
	// "deshan/graph"

    "gorm.io/driver/sqlite"
    "gorm.io/gorm"
    "gorm.io/gorm/logger"
	"module/graph/model"
)

func InitDb() (*gorm.DB, error) {
    var err error
    db, err := gorm.Open(sqlite.Open("dev.db"), &gorm.Config{
        Logger: logger.Default.LogMode(logger.Silent),
    })
    if err != nil {
        return nil, err
    }
    db.AutoMigrate(&model.Todo{})
    return db, nil
}