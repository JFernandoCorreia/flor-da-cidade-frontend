// Exemplo: src/components/CourseForm.js
import React, { useState } from 'react';
import apiWithAuth from '../services/api';

const CourseForm = () => {
    const [courseData, setCourseData] = useState({
        title: '',
        description: '',
        capacity: 0,
        location: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newCourse = await apiWithAuth.post('/courses', courseData);
            console.log('Curso criado com sucesso:', newCourse.data);
        } catch (error) {
            console.error('Erro ao criar curso:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseData({ ...courseData, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Formulário para criar um curso */}
            <input type="text" name="title" value={courseData.title} onChange={handleChange} placeholder="Título" />
            <input type="text" name="description" value={courseData.description} onChange={handleChange} placeholder="Descrição" />
            <input type="number" name="capacity" value={courseData.capacity} onChange={handleChange} placeholder="Capacidade" />
            <input type="text" name="location" value={courseData.location} onChange={handleChange} placeholder="Localização" />
            <button type="submit">Criar Curso</button>
        </form>
    );
};

export default CourseForm;
